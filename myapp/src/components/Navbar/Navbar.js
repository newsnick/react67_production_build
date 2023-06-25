// import React from 'react'
// import PropTypes from 'prop-types'

// export default function Navbar(props) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <div className="d-flex justify-content-between w-50">
//           <a className="navbar-brand" href="/">
//             {props.title}
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/">
//                 {props.home}
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">
//                 {props.features}
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">
//                 {props.prices}
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="/"
//                 id="navbarDropdownMenuLink"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 more tools
//               </a>
//               <ul
//                 className="dropdown-menu"
//                 aria-labelledby="navbarDropdownMenuLink"
//               >
//                 <li>
//                   <a className="dropdown-item" href="/moretools">
//                     text underline
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="/moretools">
//                     mirror text
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="/moretools">
//                     bold text
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="/moretools">
//                     italic text
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="/"
//                 id="navbarDropdownMenuLink"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 convert case
//               </a>
//               <ul
//                 className="dropdown-menu"
//                 aria-labelledby="navbarDropdownMenuLink"
//               >
//                 <li>
//                   <a className="dropdown-item" href="/case">
//                     upperCase
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="/case">
//                     lowerCase
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="/case">
//                     sentence case
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="/case">
//                     capitalized
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="/case">
//                     aLtErNaTiNg Case
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="/case">
//                     InVeRsE Case
//                   </a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   home: PropTypes.string.isRequired,
// }

// Navbar.defaultProps = {
//   title: 'Convert Case',
//   features: 'add tools',
// }

import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css' // Import the CSS file for Navbar styling

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex justify-content-between w-50">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.features}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.prices}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                more tools
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/moretools">
                    text underline
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/moretools">
                    mirror text
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/moretools">
                    bold text
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/moretools">
                    italic text
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                convert case
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/case">
                    upperCase
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/case">
                    lowerCase
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/case">
                    sentence case
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/case">
                    capitalized
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/case">
                    aLtErNaTiNg Case
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/case">
                    InVeRsE Case
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Convert Case',
  features: 'add tools',
}
