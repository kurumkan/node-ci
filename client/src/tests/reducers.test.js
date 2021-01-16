import blogsReducer from "../reducers/blogsReducer";
import { FETCH_BLOG } from '../actions/types';

describe('blogsReducer', () => {
    const initState = {};

    test(FETCH_BLOG, () => {
        const id = 'testid';
        const blog = {
            _id: id,
            title: 'test_title'
        }
        const action = {
            type: FETCH_BLOG,
            payload: blog
        }
        expect(blogsReducer(initState, action)).toEqual({ [id]: blog });
    })
})
