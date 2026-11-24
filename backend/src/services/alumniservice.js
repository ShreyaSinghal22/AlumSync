import * as alumniRepository from "../data-access/repositories/alumnirepository.js";

export const fetchAllAlumni = async () => {
  return await alumniRepository.getAllAlumniFromDB();
};