import React, { useRef, useEffect } from 'react'
import useDarkMode from '../../hooks/useDarkMode';

export interface CircularProgressProps {
    percentage: number
    colour: string
}

export const CircularProgress = (props: CircularProgressProps): React.ReactElement => {
    const pct = cleanPercentage(props.percentage);
    const { isDarkMode } = useDarkMode(); // Obtener el estado de darkMode del hook useDarkMode
    const iconColor = isDarkMode ? '#fff' : '#000'; // Determinar el color del icono según el estado de darkMode


    return (
        <>
            {/* @ts-ignore */}
            <svg width={200} height={200}>
                {/* @ts-ignore */}
                <g transform={`rotate(-90 ${"100 100"})`}>
                    <Circle colour={iconColor} percentage={-100} />
                    <Circle colour={props.colour} percentage={pct} />
                    {/* @ts-ignore */}
                </g>
                <Text percentage={pct} />
                {/* @ts-ignore */}
            </svg>
        </>
    );
}
const cleanPercentage = (percentage: number) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({ colour, percentage }: { colour: string, percentage: number }) => {
    const r = 70;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
    return (
        // @ts-ignore
        <circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
            strokeWidth={"2rem"}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
        />
    );
};

const Text = ({ percentage }: { percentage: number }) => {
    const darkMode = useDarkMode();
    const iconColor = darkMode.isDarkMode ? '#fff' : '#000';
    console.log(iconColor)
    return (
        // @ts-ignore
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.5em"}
            fill={iconColor}
        >
            {percentage.toFixed(0)}%
            {/* @ts-ignore */}
        </text>
    );
};
const Pie = ({ percentage, colour }: { colour: string, percentage: number }) => {
    const pct = cleanPercentage(percentage);
    return (
        // @ts-ignore
        <svg width={200} height={200}>
            {/* @ts-ignore */}
            <g transform={`rotate(-90 ${"100 100"})`}>
                <Circle colour="lightgrey" percentage={0} />
                <Circle colour={colour} percentage={pct} />
                {/* @ts-ignore */}
            </g>
            <Text percentage={pct} />
            {/* @ts-ignore */}
        </svg>
    );
};
