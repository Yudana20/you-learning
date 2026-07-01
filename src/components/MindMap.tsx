"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { leadershipSkills, LeadershipSkill } from "@/data/leadership-skills";

const BLUE   = "#5b52e0";
const YELLOW = "#f0b429";
const NAVY   = "#151345";
const WHITE  = "#ffffff";
const BG     = "#f8f9fc";

const lSkills = leadershipSkills.filter((s) => s.category === "leadership");
const mSkills = leadershipSkills.filter((s) => s.category === "managerial");

const W = 960;
const H = 540;
const CX = W / 2;
const CY = H / 2;

const phaseColor = (phase: number) =>
  phase === 1 ? "#3b82f6" : phase === 2 ? "#f97316" : "#10b981";

// Short label for node (first word, max 10 chars)
const shortLabel = (title: string) => {
  const w = title.split(" ");
  return w[0].length > 10 ? w[0].slice(0, 9) + "…" : w[0];
};

// Center node
const CENTER_R = 58;

// Hub nodes
const L_HUB = { x: CX - 220, y: CY, r: 50 };
const M_HUB = { x: CX + 220, y: CY, r: 50 };

// Inner skill nodes (L1–L4 closer to hub, L5–L8 further out)
// Layout matching the image: inner 4 on one layer, outer 4 further
const INNER_R = 34;
const OUTER_R = 34;

// Left side: L1–L4 inner column, L5–L8 outer column
// image shows L1,L2,L3,L4 closer to hub (right col), L5,L6,L7,L8 further (left col)
const L_INNER_X = L_HUB.x - 105;
const L_OUTER_X = L_HUB.x - 215;
const ROW_GAP   = 90;
const ROW_START = CY - ROW_GAP * 1.5;

// inner: indices 0–3 = L1–L4, outer: indices 4–7 = L5–L8
// But image order: inner col top-to-bottom = L1, L2, L3, L4; outer = L5, L6, L7, L8
const L_POSITIONS = [
  // inner (L1–L4)
  { x: L_INNER_X, y: ROW_START,             r: INNER_R }, // L1
  { x: L_INNER_X, y: ROW_START + ROW_GAP,   r: INNER_R }, // L2
  { x: L_INNER_X, y: ROW_START + ROW_GAP*2, r: INNER_R }, // L3
  { x: L_INNER_X, y: ROW_START + ROW_GAP*3, r: INNER_R }, // L4
  // outer (L5–L8)
  { x: L_OUTER_X, y: ROW_START,             r: OUTER_R }, // L5
  { x: L_OUTER_X, y: ROW_START + ROW_GAP,   r: OUTER_R }, // L6
  { x: L_OUTER_X, y: ROW_START + ROW_GAP*2, r: OUTER_R }, // L7
  { x: L_OUTER_X, y: ROW_START + ROW_GAP*3, r: OUTER_R }, // L8
];

const R_INNER_X = M_HUB.x + 105;
const R_OUTER_X = M_HUB.x + 215;

const M_POSITIONS = [
  { x: R_INNER_X, y: ROW_START,             r: INNER_R }, // M1
  { x: R_INNER_X, y: ROW_START + ROW_GAP,   r: INNER_R }, // M2
  { x: R_INNER_X, y: ROW_START + ROW_GAP*2, r: INNER_R }, // M3
  { x: R_INNER_X, y: ROW_START + ROW_GAP*3, r: INNER_R }, // M4
  { x: R_OUTER_X, y: ROW_START,             r: OUTER_R }, // M5
  { x: R_OUTER_X, y: ROW_START + ROW_GAP,   r: OUTER_R }, // M6
  { x: R_OUTER_X, y: ROW_START + ROW_GAP*2, r: OUTER_R }, // M7
  { x: R_OUTER_X, y: ROW_START + ROW_GAP*3, r: OUTER_R }, // M8
];

// Lines from hub to inner nodes, and inner to outer
function buildLines() {
  const lines: { x1: number; y1: number; x2: number; y2: number; color: string }[] = [];

  // center → hubs
  lines.push({ x1: CX, y1: CY, x2: L_HUB.x, y2: L_HUB.y, color: BLUE });
  lines.push({ x1: CX, y1: CY, x2: M_HUB.x, y2: M_HUB.y, color: YELLOW });

  // L hub → L inner (L1–L4), L inner → L outer (L5–L8)
  for (let i = 0; i < 4; i++) {
    lines.push({ x1: L_HUB.x, y1: L_HUB.y, x2: L_POSITIONS[i].x, y2: L_POSITIONS[i].y, color: BLUE });
    lines.push({ x1: L_POSITIONS[i].x, y1: L_POSITIONS[i].y, x2: L_POSITIONS[i + 4].x, y2: L_POSITIONS[i + 4].y, color: BLUE });
  }

  // M hub → M inner (M1–M4), M inner → M outer (M5–M8)
  for (let i = 0; i < 4; i++) {
    lines.push({ x1: M_HUB.x, y1: M_HUB.y, x2: M_POSITIONS[i].x, y2: M_POSITIONS[i].y, color: YELLOW });
    lines.push({ x1: M_POSITIONS[i].x, y1: M_POSITIONS[i].y, x2: M_POSITIONS[i + 4].x, y2: M_POSITIONS[i + 4].y, color: YELLOW });
  }

  return lines;
}

const LINES = buildLines();

interface TooltipState { skill: LeadershipSkill; x: number; y: number }

function SkillNode({
  skill, pos, color, textColor, bgHover, borderColor,
  hovered, onEnter, onLeave, onClick,
}: {
  skill: LeadershipSkill;
  pos: { x: number; y: number; r: number };
  color: string; textColor: string; bgHover: string; borderColor: string;
  hovered: boolean;
  onEnter: () => void; onLeave: () => void; onClick: () => void;
}) {
  const pc = phaseColor(skill.phase);
  return (
    <g
      style={{ cursor: "pointer" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Shadow on hover */}
      {hovered && (
        <circle cx={pos.x} cy={pos.y} r={pos.r + 4} fill={color} opacity={0.15} />
      )}
      {/* Main circle */}
      <circle
        cx={pos.x} cy={pos.y} r={pos.r}
        fill={hovered ? color : WHITE}
        stroke={borderColor}
        strokeWidth={hovered ? 2 : 1.5}
      />
      {/* Code */}
      <text
        x={pos.x} y={pos.y - 5}
        textAnchor="middle"
        fill={hovered ? WHITE : color}
        fontSize={10} fontWeight="800"
        style={{ fontFamily: "sans-serif" }}
      >
        {skill.code}
      </text>
      {/* Short name */}
      <text
        x={pos.x} y={pos.y + 9}
        textAnchor="middle"
        fill={hovered ? "rgba(255,255,255,0.85)" : "#4b5563"}
        fontSize={7.5}
        style={{ fontFamily: "sans-serif" }}
      >
        {shortLabel(skill.title)}
      </text>
      {/* Phase dot */}
      <circle cx={pos.x + pos.r - 7} cy={pos.y - pos.r + 7} r={5} fill={pc} stroke={WHITE} strokeWidth={1.5} />
    </g>
  );
}

export default function MindMap() {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  function handleClick(slug: string) {
    router.push(`/read/how-to-a-leadership/${slug}`);
  }

  return (
    <div className="w-full">
      {/* Desktop SVG */}
      <div className="hidden md:block w-full">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full max-w-5xl mx-auto block"
          style={{ minHeight: 340 }}
        >
          {/* Background */}
          <rect width={W} height={H} fill={BG} rx={16} />

          {/* Connection lines */}
          {LINES.map((l, i) => (
            <line
              key={i}
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke={l.color}
              strokeWidth={1.5}
              strokeOpacity={0.4}
            />
          ))}

          {/* Center node */}
          <circle cx={CX} cy={CY} r={CENTER_R} fill={NAVY} />
          <text x={CX} y={CY - 12} textAnchor="middle" fill={WHITE} fontSize={10} fontWeight="800" style={{ fontFamily: "sans-serif" }}>HOW TO A</text>
          <text x={CX} y={CY + 4}  textAnchor="middle" fill={WHITE} fontSize={10} fontWeight="800" style={{ fontFamily: "sans-serif" }}>LEADERSHIP</text>
          <text x={CX} y={CY + 20} textAnchor="middle" fill="#a5b4fc" fontSize={8} style={{ fontFamily: "sans-serif" }}>16 Skill Modul</text>

          {/* L Hub */}
          <circle cx={L_HUB.x} cy={L_HUB.y} r={L_HUB.r} fill={BLUE} />
          <text x={L_HUB.x} y={L_HUB.y - 7} textAnchor="middle" fill={WHITE} fontSize={9} fontWeight="800" style={{ fontFamily: "sans-serif" }}>LEADERSHIP</text>
          <text x={L_HUB.x} y={L_HUB.y + 9} textAnchor="middle" fill="#c7d2fe" fontSize={9} style={{ fontFamily: "sans-serif" }}>SKILLS</text>

          {/* M Hub */}
          <circle cx={M_HUB.x} cy={M_HUB.y} r={M_HUB.r} fill={YELLOW} />
          <text x={M_HUB.x} y={M_HUB.y - 7} textAnchor="middle" fill={NAVY} fontSize={9} fontWeight="800" style={{ fontFamily: "sans-serif" }}>MANAGERIAL</text>
          <text x={M_HUB.x} y={M_HUB.y + 9} textAnchor="middle" fill="#7c5e00" fontSize={9} style={{ fontFamily: "sans-serif" }}>SKILLS</text>

          {/* L Skill nodes */}
          {lSkills.map((skill, i) => (
            <SkillNode
              key={skill.id}
              skill={skill}
              pos={L_POSITIONS[i]}
              color={BLUE}
              textColor={WHITE}
              bgHover={BLUE}
              borderColor={BLUE}
              hovered={hovered === skill.id}
              onEnter={() => { setHovered(skill.id); setTooltip({ skill, x: L_POSITIONS[i].x, y: L_POSITIONS[i].y }); }}
              onLeave={() => { setHovered(null); setTooltip(null); }}
              onClick={() => handleClick(skill.slug)}
            />
          ))}

          {/* M Skill nodes */}
          {mSkills.map((skill, i) => (
            <SkillNode
              key={skill.id}
              skill={skill}
              pos={M_POSITIONS[i]}
              color={YELLOW}
              textColor={NAVY}
              bgHover={YELLOW}
              borderColor={YELLOW}
              hovered={hovered === skill.id}
              onEnter={() => { setHovered(skill.id); setTooltip({ skill, x: M_POSITIONS[i].x, y: M_POSITIONS[i].y }); }}
              onLeave={() => { setHovered(null); setTooltip(null); }}
              onClick={() => handleClick(skill.slug)}
            />
          ))}

          {/* Tooltip */}
          {tooltip && (() => {
            const isL = tooltip.skill.category === "leadership";
            const tx = tooltip.x > CX ? tooltip.x - 185 : tooltip.x + 44;
            const ty = Math.min(Math.max(tooltip.y - 44, 10), H - 100);
            return (
              <g>
                <rect x={tx} y={ty} width={176} height={88} rx={10} fill={NAVY} opacity={0.96} />
                <rect x={tx} y={ty} width={4}   height={88} rx={2}  fill={isL ? BLUE : YELLOW} />
                <text x={tx + 14} y={ty + 18} fill={isL ? "#a5b4fc" : "#fde68a"} fontSize={8.5} fontWeight="800" style={{ fontFamily: "sans-serif" }}>
                  {tooltip.skill.code}
                </text>
                <text x={tx + 36} y={ty + 18} fill={WHITE} fontSize={9} fontWeight="700" style={{ fontFamily: "sans-serif" }}>
                  {tooltip.skill.title}
                </text>
                {(tooltip.skill.subtitle.match(/.{1,26}(\s|$)/g) ?? []).slice(0, 3).map((line, li) => (
                  <text key={li} x={tx + 14} y={ty + 34 + li * 15} fill="#94a3b8" fontSize={7.5} style={{ fontFamily: "sans-serif" }}>
                    {line.trim()}
                  </text>
                ))}
                <text x={tx + 14} y={ty + 78} fill={isL ? "#a5b4fc" : "#fde68a"} fontSize={7.5} fontWeight="600" style={{ fontFamily: "sans-serif" }}>
                  Klik untuk baca modul →
                </text>
              </g>
            );
          })()}

          {/* Legend */}
          <g transform={`translate(${W - 145}, ${H - 72})`}>
            <text x={0} y={0} fill="#6b7280" fontSize={8} fontWeight="700" style={{ fontFamily: "sans-serif" }}>FASE</text>
            {[
              { label: "Foundation (1–12)",  color: "#3b82f6" },
              { label: "Growth (13–24)",     color: "#f97316" },
              { label: "Leadership (25–42)", color: "#10b981" },
            ].map((f, i) => (
              <g key={i} transform={`translate(0, ${14 + i * 18})`}>
                <circle cx={6} cy={5} r={5} fill={f.color} />
                <text x={16} y={9} fill="#6b7280" fontSize={8} style={{ fontFamily: "sans-serif" }}>{f.label}</text>
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Mobile: 2-column grid cards */}
      <div className="md:hidden space-y-5">
        {(["leadership", "managerial"] as const).map((cat) => {
          const color = cat === "leadership" ? BLUE : YELLOW;
          const label = cat === "leadership" ? "Leadership Skills" : "Managerial Skills";
          const textCol = cat === "leadership" ? WHITE : NAVY;
          return (
            <div key={cat}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-3" style={{ background: color, color: textCol }}>
                {label}
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {leadershipSkills.filter((s) => s.category === cat).map((skill) => (
                  <button
                    key={skill.id}
                    onClick={() => handleClick(skill.slug)}
                    className="relative text-left p-3 rounded-xl border-2 bg-white active:scale-95 transition-transform"
                    style={{ borderColor: color }}
                  >
                    <div className="absolute top-2 right-2 w-3 h-3 rounded-full" style={{ background: phaseColor(skill.phase) }} />
                    <div className="text-xs font-black mb-1" style={{ color }}>
                      {skill.code}
                    </div>
                    <div className="text-xs font-semibold text-gray-800 leading-tight pr-4">{skill.title}</div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
        {/* Mobile legend */}
        <div className="flex gap-4 pt-1">
          {[
            { label: "Foundation", color: "#3b82f6" },
            { label: "Growth",     color: "#f97316" },
            { label: "Leadership", color: "#10b981" },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: f.color }} />
              <span className="text-xs text-gray-500">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
