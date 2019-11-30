import React from 'react'

import { Row, Col } from 'react-flexbox-grid'

import skgtechLogo from './../../images/new/skgtech-logo.svg'
import shesharpLogo from './../../images/new/shesharp-logo.svg'

const Organizers = () => {
  return (
    <Row center="xs">
      <Col
        css={{
          lineHeight: '50px',
        }}
      >
        <a rel="noopener noreferrer" href="https://skgtech.io/" target="_blank">
          <img src={skgtechLogo} alt="SKGTech" />
        </a>
      </Col>
      <Col
        css={{
          lineHeight: '50px',
        }}
      >
        <a rel="noopener noreferrer" href="http://www.shesharp.org/" target="_blank">
          <img src={shesharpLogo} alt="SKGTech" />
        </a>
      </Col>
    </Row>
  )
}
// const Organizers = () => {
//   return (
//     <div css={{
//       backgroundImage: `linear-gradient(rgba(0, 62, 115, 0.9), rgba(0, 62, 115, 0.9)), url(/assets/images/new/about.jpg)`,
//       backgroundRepeat: 'no-repeat',
//       backgroundSize: 'cover',
//       backgroundPosition: 'top',
//       position: 'relative',
//       color: 'white',
//       paddingTop: '4em',
//       paddingBottom: '4em',
//       textAlign: 'center',
//       'img': {
//         maxWidth: '100%',
//       }}}>
//       <Grid>
//         <img src={confLogo} alt="DEVit"/>

//         <div className="organizers__logos">
//           <p css={{
//             marginBottom: '32px'
//           }}>organised by</p>
//           <Row>
//             <Col css={{
//               lineHeight: '50px',
//             }}>
//               <a href="https://skgtech.io/" target="_blank">
//                 <img src={skgtechLogo} alt="SKGTech" />
//               </a>
//             </Col>
//             <Col css={{
//               lineHeight: '50px',
//             }}>
//               <a href="http://www.shesharp.org/" target="_blank">
//                 <img src={shesharpLogo} alt="SKGTech" />
//               </a>
//             </Col>
//           </Row>
//         </div>
//       </Grid>
//     </div>
//   );
// };

export default Organizers
