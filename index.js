import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Presentation from './presentation';

ReactDOM.render(<Presentation />, document.getElementById('root'));

// if (module.hot) {
// 	module.hot.accept('./presentation', () => {
// 		const NextPresentation = require('./presentation').default;
// 		ReactDOM.render(
// 			<AppContainer errorReporter={CustomErrorReporter}>
// 				<MathJax.Context input="ascii">
// 					<NextPresentation />
// 				</MathJax.Context>
// 			</AppContainer>,
// 			document.getElementById('root')
// 		);
// 	});
// }
