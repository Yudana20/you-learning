"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { leadershipSkills, LeadershipSkill } from "@/data/leadership-skills";

const BLUE = "#423ccf";
const YELLOW = "#ebb000";
const NAVY = "#151345";
const WHITE = "#ffffff";

const lSkills = leadershipSkills.filter((s) => s.category === "leadership");
const mSkills = leadershipSkills.filter((s) => s.category === "managerial");

// SVG canvas dimensions
const W = 900;
const H = 520;
const CX = W / 2;
const CY = H / 2;

// Center node
const CENTER = { x: CX, y: CY, r: 52 };

// Branch hubs
const L_HUB = { x: CX - 210, y: CY, r: 36 };
const M_HUB = { x: CX + 210, y: CY, r: 36 };

// Skill node positions: 2 columns of 4, arranged vertically
function getSkillPositions(hubX: number, side: "left" | "right") {
  const dir = side === "left" ? -1 : 1;
  const colOffset = 110;
  const rowGap = 72;
  const startY = CY - (rowGap * 1.5);

  return lSkills.map((_, i) => {
    const col = Math.floor(i / 4); // 0 or 1
    const row = i % 4;
    const x = hubX + dir * (colOffset + col * 105);
    const y = startY + row * rowGap;
    return { x, y, r: 26 };
  });
}

const L_POS = getSkillPositions(L_HUB.x, "left");
const M_POS = getSkillPositions(M_HUB.x, "right");

interface TooltipState {
  skill: LeadershipSkill;
  x: number;
  y: number;
}

export default function MindMap() {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  function handleNodeEnter(skill: LeadershipSkill, nx: number, ny: number) {
    setHovered(skill.id);
    setTooltip({ skill, x: nx, y: ny });
  }

  function handleNodeLeave() {
    setHovered(null);
    setTooltip(null);
  }

  function handleNodeClick(slug: string) {
    router.push(`/read/how-to-a-leadership/${slug}`);
  }

  const phaseColor = (phase: number) => {
    if (phase === 1) return "#2563eb";
    if (phase === 2) return "#d97706";
    return "#059669";
  };

  return (
    <div className="w-full">
      {/* SVG Mind Map — desktop */}
      <div className="hidden md:block w-full overflow-x-auto">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full max-w-4xl mx-auto block"
          style={{ minHeight: 320 }}
        >
          {/* Lines: center → hubs */}
          <line x1={CENTER.x} y1={CENTER.y} x2={L_HUB.x} y2={L_HUB.y} stroke={BLUE} strokeWidth={2.5} strokeOpacity={0.5} />
          <line x1={CENTER.x} y1={CENTER.y} x2={M_HUB.x} y2={M_HUB.y} stroke={YELLOW} strokeWidth={2.5} strokeOpacity={0.5} />

          {/* Lines: L hub → L skill nodes */}
          {L_POS.map((pos, i) => (
            <line key={`ll${i}`} x1={L_HUB.x} y1={L_HUB.y} x2={pos.x} y2={pos.y} stroke={BLUE} strokeWidth={1.5} strokeOpacity={0.35} />
          ))}

          {/* Lines: M hub → M skill nodes */}
          {M_POS.map((pos, i) => (
            <line key={`ml${i}`} x1={M_HUB.x} y1={M_HUB.y} x2={pos.x} y2={pos.y} stroke={YELLOW} strokeWidth={1.5} strokeOpacity={0.35} />
          ))}

          {/* Center node */}
          <circle cx={CENTER.x} cy={CENTER.y} r={CENTER.r} fill={NAVY} />
          <text x={CENTER.x} y={CENTER.y - 8} textAnchor="middle" fill={WHITE} fontSize={9} fontWeight="700" letterSpacing="0.5">
            HOW TO A
          </text>
          <text x={CENTER.x} y={CENTER.y + 6} textAnchor="middle" fill={WHITE} fontSize={9} fontWeight="700" letterSpacing="0.5">
            LEADERSHIP
          </text>
          <text x={CENTER.x} y={CENTER.y + 19} textAnchor="middle" fill="#a5b4fc" fontSize={7.5}>
            16 Skill Modul
          </text>

          {/* L Hub */}
          <circle cx={L_HUB.x} cy={L_HUB.y} r={L_HUB.r} fill={BLUE} />
          <text x={L_HUB.x} y={L_HUB.y - 5} textAnchor="middle" fill={WHITE} fontSize={8} fontWeight="700">
            LEADERSHIP
          </text>
          <text x={L_HUB.x} y={L_HUB.y + 8} textAnchor="middle" fill="#c7d2fe" fontSize={7.5}>
            SKILLS
          </text>

          {/* M Hub */}
          <circle cx={M_HUB.x} cy={M_HUB.y} r={M_HUB.r} fill={YELLOW} />
          <text x={M_HUB.x} y={M_HUB.y - 5} textAnchor="middle" fill={NAVY} fontSize={8} fontWeight="700">
            MANAGERIAL
          </text>
          <text x={M_HUB.x} y={M_HUB.y + 8} textAnchor="middle" fill="#5e4800" fontSize={7.5}>
            SKILLS
          </text>

          {/* L Skill nodes */}
          {lSkills.map((skill, i) => {
            const pos = L_POS[i];
            const isHovered = hovered === skill.id;
            return (
              <g
                key={skill.id}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => handleNodeEnter(skill, pos.x, pos.y)}
                onMouseLeave={handleNodeLeave}
                onClick={() => handleNodeClick(skill.slug)}
                transform={isHovered ? `translate(${pos.x},${pos.y}) scale(1.12) translate(${-pos.x},${-pos.y})` : undefined}
              >
                <circle
                  cx={pos.x} cy={pos.y} r={pos.r}
                  fill={isHovered ? BLUE : "#e0e7ff"}
                  stroke={BLUE}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                />
                <text x={pos.x} y={pos.y - 4} textAnchor="middle" fill={isHovered ? WHITE : BLUE} fontSize={8} fontWeight="800">
                  {skill.code}
                </text>
                <text x={pos.x} y={pos.y + 7} textAnchor="middle" fill={isHovered ? "#c7d2fe" : "#374151"} fontSize={6.5}>
                  {skill.title.split(" ")[0]}
                </text>
                {/* Phase dot */}
                <circle cx={pos.x + pos.r - 6} cy={pos.y - pos.r + 6} r={4} fill={phaseColor(skill.phase)} />
              </g>
            );
          })}

          {/* M Skill nodes */}
          {mSkills.map((skill, i) => {
            const pos = M_POS[i];
            const isHovered = hovered === skill.id;
            return (
              <g
                key={skill.id}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => handleNodeEnter(skill, pos.x, pos.y)}
                onMouseLeave={handleNodeLeave}
                onClick={() => handleNodeClick(skill.slug)}
                transform={isHovered ? `translate(${pos.x},${pos.y}) scale(1.12) translate(${-pos.x},${-pos.y})` : undefined}
              >
                <circle
                  cx={pos.x} cy={pos.y} r={pos.r}
                  fill={isHovered ? YELLOW : "#fef9c3"}
                  stroke={YELLOW}
                  strokeWidth={isHovered ? 2.5 : 1.5}
                />
                <text x={pos.x} y={pos.y - 4} textAnchor="middle" fill={isHovered ? NAVY : "#92400e"} fontSize={8} fontWeight="800">
                  {skill.code}
                </text>
                <text x={pos.x} y={pos.y + 7} textAnchor="middle" fill={isHovered ? "#5e4800" : "#374151"} fontSize={6.5}>
                  {skill.title.split(" ")[0]}
                </text>
                {/* Phase dot */}
                <circle cx={pos.x + pos.r - 6} cy={pos.y - pos.r + 6} r={4} fill={phaseColor(skill.phase)} />
              </g>
            );
          })}

          {/* Tooltip */}
          {tooltip && (() => {
            const tx = tooltip.x > W * 0.6 ? tooltip.x - 170 : tooltip.x + 36;
            const ty = Math.min(Math.max(tooltip.y - 38, 8), H - 85);
            const isL = tooltip.skill.category === "leadership";
            return (
              <g>
                <rect x={tx} y={ty} width={162} height={76} rx={8} fill={NAVY} opacity={0.97} />
                <rect x={tx} y={ty} width={4} height={76} rx={2} fill={isL ? BLUE : YELLOW} />
                <text x={tx + 14} y={ty + 16} fill={isL ? "#a5b4fc" : "#fde68a"} fontSize={8} fontWeight="700">
                  {tooltip.skill.code}
                </text>
                <text x={tx + 34} y={ty + 16} fill={WHITE} fontSize={8.5} fontWeight="700">
                  {tooltip.skill.title}
                </text>
                {/* Wrap subtitle manually into 2 lines */}
                {tooltip.skill.subtitle.match(/.{1,28}(\s|$)/g)?.slice(0, 3).map((line, li) => (
                  <text key={li} x={tx + 14} y={ty + 30 + li * 14} fill="#cbd5e1" fontSize={7.5}>
                    {line.trim()}
                  </text>
                ))}
                <text x={tx + 14} y={ty + 66} fill={isL ? "#a5b4fc" : "#fde68a"} fontSize={7} fontWeight="600">
                  Klik untuk baca modul →
                </text>
              </g>
            );
          })()}

          {/* Legend */}
          <g transform={`translate(${W - 130}, ${H - 65})`}>
            <text x={0} y={0} fill="#6b7280" fontSize={7} fontWeight="600">FASE</text>
            {[
              { phase: 1, label: "Foundation (1–12)", color: "#2563eb" },
              { phase: 2, label: "Growth (13–24)", color: "#d97706" },
              { phase: 3, label: "Leadership (25–42)", color: "#059669" },
            ].map((f, i) => (
              <g key={f.phase} transform={`translate(0, ${10 + i * 16})`}>
                <circle cx={4} cy={4} r={4} fill={f.color} />
                <text x={12} y={8} fill="#6b7280" fontSize={7}>{f.label}</text>
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Mobile fallback: grid cards */}
      <div className="md:hidden space-y-6">
        {(["leadership", "managerial"] as const).map((cat) => (
          <div key={cat}>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
              style={{ background: cat === "leadership" ? BLUE : YELLOW, color: cat === "leadership" ? WHITE : NAVY }}
            >
              {cat === "leadership" ? "Leadership Skills" : "Managerial Skills"}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {leadershipSkills.filter((s) => s.category === cat).map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => handleNodeClick(skill.slug)}
                  className="text-left p-3 rounded-xl border-2 transition-all active:scale-95"
                  style={{
                    borderColor: cat === "leadership" ? BLUE : YELLOW,
                    background: cat === "leadership" ? "#e0e7ff" : "#fef9c3",
                  }}
                >
                  <div className="text-xs font-black mb-1" style={{ color: cat === "leadership" ? BLUE : "#92400e" }}>
                    {skill.code}
                  </div>
                  <div className="text-xs font-semibold text-gray-800 leading-tight">{skill.title}</div>
                  <div
                    className="mt-1.5 w-2 h-2 rounded-full"
                    style={{ background: phaseColor(skill.phase) }}
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
