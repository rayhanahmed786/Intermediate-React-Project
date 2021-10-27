import React from 'react'
import { Container } from "../../globalStyles";
import PropTypes from 'prop-types'
import {
  PolicyCardSection,
  PolicyIcon,
  PolicyInfo
} from "./PolicyStyles";

const PolicyCard = () => {
    return (
      <Container>
        <PolicyCardSection>
          <PolicyIcon>
            
          </PolicyIcon>
          <PolicyInfo>
            
           </PolicyInfo>
        </PolicyCardSection>
      </Container>
    );
}

PolicyCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default PolicyCard
