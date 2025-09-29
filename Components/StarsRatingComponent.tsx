"use client";
import type { FC } from "react";
import Rating from "@mui/material/Rating";
import {toStars10to5} from "@/lib/formats";

type StarsRatingProps = {
    value: number;
    precision?: number;
    showNumber?: boolean;
    sizePx?: number;
};

const StarsRating: FC<StarsRatingProps> = ({
                                               value,
                                               precision = 0.1,
                                               showNumber = false,
                                               sizePx = 18,
                                           }) => {
    const formatedValue = toStars10to5(value)
    return (
        <div className="inline-flex items-center gap-2">
            <Rating
                value={formatedValue}
                precision={precision}
                readOnly
                sx={{ "& .MuiRating-icon": { fontSize: sizePx } }}
            />
            {showNumber && <span className="text-sm text-gray-600">{value?.toFixed(1)}</span>}
        </div>
    );
};

export default StarsRating;
