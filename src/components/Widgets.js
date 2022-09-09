import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRigth">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn Actualités</h2>
                <InfoIcon />
            </div>
            {newsArticle("Antoine Wanda cherche une alternance", "Top news - 154 000 lecteurs")}
            {newsArticle("Coronavirus", "Il y'a 5h - 1 475 lecteurs")}
            {newsArticle("Ou trouver de bonnes entreprises", "Il y'a 12h - 300 lecteurs")}
            {newsArticle("La chute du Bitcoin", "Il y'a 23h - 240 lecteurs")}
        </div>

    )
}

export default Widgets