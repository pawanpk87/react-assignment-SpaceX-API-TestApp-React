import http from "../http-common";

class space {
  getAllLaunchpads() {
    return http.get(`launchpads`);
  }

  getLaunchDetails(id) {
    return http.get(`launches/${id}`);
  }
}

export default new space();
