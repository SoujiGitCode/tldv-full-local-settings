import '@testing-library/jest-dom/extend-expect'
import {render} from "@testing-library/react"
import {prettyDOM} from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom'

import Sidebar from "./index";

test('renders Sidebar component', async () => {

    const {getByTestId} = render(
        <Router>
          <Sidebar />
        </Router>,
    );

    const brand = getByTestId("brand")

});