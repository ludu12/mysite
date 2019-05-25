const jsdomGlobal = require('jsdom-global/register');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

global.API_BASE = 'http://localhost:3000';