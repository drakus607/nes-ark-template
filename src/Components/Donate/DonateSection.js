import React from 'react'
import styled from 'styled-components'
import TitleDiv from '../ServersDivs/TitleDiv'

const StyledDonate = styled.section`
display: flex;
flex-wrap: wrap;
flex-direction: column;
`

const DonateSection = () => {
    return (
        <StyledDonate id="donate" name="donate" className="container">
            <TitleDiv title="Sklep VIP" subtitle="Sklep z punktami oraz pakietami VIP"/>
            <h3>costam costam</h3>
        </StyledDonate>
    )
}

export default DonateSection
