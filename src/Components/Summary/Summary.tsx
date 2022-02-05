import { useCallback, useEffect, useState } from "react"
import { httpgetSummary } from "../../httpAPL"
import Box from "../Box"
import "./style.css"

const Summary = () => {
    const [summary, setSumarry] = useState<SummaryType>()

    const getSummary = useCallback(async() => {
        const summary = await httpgetSummary()

        setSumarry(summary.data)
      }, [])

      useEffect(() => {
         getSummary()
      }, [])

    return (
        <Box isPadding>
        <article className="summary">
           <ul>
               <li>
                   <div className="title">확진자</div>
                   <div className="count">{summary?.TotalCase || 'none'}</div>
                   <div className="compare">{summary?.TotalCaseBefore}</div>
                   
                </li>
                <li>
                   <div className="title">사망자</div>
                   <div className="count">{summary?.TotalDeath}</div>
                   <div className="compare">{summary?.TodayDeath}</div>
                   
                </li>
                <li>
                   <div className="title">완치자</div>
                   <div className="count">{summary?.TotalRecovered}</div>
                   <div className="compare">{summary?.TodayRecovered}</div>
                   
                </li>
                <li>
                   <div className="title">격리자</div>
                   <div className="count">{summary?.NowCase}</div>
                </li>
               
           </ul>
        </article>
        </Box>
    )
}

export default Summary