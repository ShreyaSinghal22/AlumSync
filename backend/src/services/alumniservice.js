import * as alumniRepository from "../data-access/repositories/alumniRepository.js";

export const fetchAllAlumni = async () => {
  return await alumniRepository.getAllAlumniFromDB();
};