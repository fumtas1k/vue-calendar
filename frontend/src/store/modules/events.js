import axios from "axios";

const apiUrl = "http://localhost:3000";

const state = {
  events: [],
  event: null,
};

const getters = {
  events(state) {
    return state.events.map((event) => {
      return {
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      };
    });
  },
  event(state) {
    if (state.event) {
      // eslint-disable-next-line no-const-assign
      return {
        ...state.event,
        start: new Date(state.event.start),
        end: new Date(state.event.end),
      };
    }
    return null;
  },
};

const mutations = {
  setEvents(state, events) {
    state.events = events;
  },
  setEvent(state, event) {
    state.event = event;
  },
};

const actions = {
  async fetchEvents({ commit }) {
    const response = await axios.get(`${apiUrl}/events`);
    commit("setEvents", response.data);
  },
  setEvent({ commit }, event) {
    commit("setEvent", event);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
