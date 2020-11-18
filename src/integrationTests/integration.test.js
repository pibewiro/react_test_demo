import moxios from "moxios";
import { testStore } from "../testStore";
import { fetchPosts } from "../actions";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Store is updated correctly", () => {
    const expectedState = [
      { title: "Title 1", body: "Text 1" },
      { title: "Title 2", body: "Text 2" },
      { title: "Title 3", body: "Text 3" },
    ];

    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
