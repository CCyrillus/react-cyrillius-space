const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";

let initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 5,
	currentPage: 1,
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((i) => {
					if (i.id === action.userId) {
						return { ...i, followed: true };
					}
					return i;
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((i) => {
					if (i.id === action.userId) {
						return { ...i, followed: false };
					}
					return i;
				}),
			};

		case SET_USERS:
			return { ...state, users: action.users };
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage };
		case SET_TOTAL_COUNT:
			return { ...state, totalUsersCount: action.count };
		default:
			return state;
	}
};

export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId }); // Action Creator

export const setCurrentPageAC = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
});
export const setTotalUsersCountAC = (totalCount) => ({
	type: SET_TOTAL_COUNT,
	count: totalCount,
});
