import React, { Fragment, useState } from 'react';
import DOMPurify from 'dompurify';

//Components
import { ButtonSmall } from '../../shared/Buttons'


const GamePageMedia = ({game: { platforms }}) => {
    const [selectedRequirements, setRequirementPlat] = useState(0)

    const filteredRequirements = platforms.filter(item => item.requirements).map(({ platform: { slug, name }, requirements: { minimum, recommended } }) => ({
        name, slug,
        minimum: DOMPurify.sanitize(minimum),
        recommended: DOMPurify.sanitize(recommended)
    }))

    return (
        <Fragment>
            <hr className="game-border"/>
            {
                filteredRequirements.length > 0 ?
                    <div className="game-requirements">
                        <h2 className="s-26 w-bold c-light mar-b-16">System Requirements</h2>
                        <div className="game-system-select d-flex mar-b-16">
                            {
                                filteredRequirements.map(({slug}, index) => <ButtonSmall func={() => setRequirementPlat(index)} requireIcon={true} icon={require(`../../assets/${slug}.svg`)} status={selectedRequirements === index}/>)
                            }
                        </div>
                        <div className="sys-container cw-75 d-flex a-between">
                            <div className="sys-requirements lh-high" dangerouslySetInnerHTML={{ __html: filteredRequirements[selectedRequirements].minimum }} />
                            {
                                filteredRequirements[selectedRequirements].recommended ?
                                    <div className="sys-requirements lh-high" dangerouslySetInnerHTML={{ __html: filteredRequirements[selectedRequirements].recommended }} />
                                :
                                    null
                            }
                        </div>
                    </div>
                :
                    null
            }
        </Fragment>
    )
}

export default GamePageMedia;