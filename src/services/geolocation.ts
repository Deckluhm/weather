export default {
  get(success: PositionCallback, error?: PositionErrorCallback) {
    navigator.geolocation.getCurrentPosition(success, error);
  },

  async isEnabled() {
    const { state } = await navigator.permissions.query({
      name: "geolocation"
    });

    return state === "granted";
  }
};
