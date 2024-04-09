// import { useState } from "react";
import { IMilestone } from "../App";

interface IProps {
  milestone: IMilestone
}

function Milestone (props: IProps) {
  

  return (
    <div>
      <span>
        { props.milestone.name }
      </span>
      <span>
        in
      </span>
      <span>
        { props.milestone.date }
      </span>
    </div>
  )

}

export default Milestone;