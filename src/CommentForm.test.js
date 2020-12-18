import CommentForm from './CommentForm'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'

let store;

beforeEach(() => {
    store = createStore(reducer);
})

it("renders without crashing", function () {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CommentForm />
            </MemoryRouter>
        </Provider>
    )
});

it("matches the snapshot", function() {
    const { asFragment } = render(
        <Provider store={store}>
            <MemoryRouter>
                <CommentForm />
            </MemoryRouter>
        </Provider>
    )

    expect(asFragment).toMatchSnapshot();
})