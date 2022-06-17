/* eslint-disable jsx-a11y/alt-text */
import React, { useState ,FC} from "react";
import classes from "./Paginator.module.css";
import cn from "classnames";

export interface IpaginatorProps{
	totalUsersCount:number,
	pageSize:number,
	onPageChanged:(page:number) => void,
	currentPage: number
}

const Paginator:FC<IpaginatorProps> = ({totalUsersCount,pageSize,onPageChanged,currentPage}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages:Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionSize = 10;
  let portionsCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState<number>(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={classes.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              key={p}
              onClick={() => {
                onPageChanged(p);
              }}
              className={cn(classes.pageNumber, {
                [classes.selectedPage]: currentPage === p,
              })}
            >
              {p}
            </span>
          );
        })}

      {portionsCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
