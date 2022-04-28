import http from "../../util/http-common";

const getAll = () => http.get(`/BranchReps`);

const AbsenService = {
  getAll,
};

export default AbsenService;
