class WorkExperienceItem {
  constructor(position, company, location, startDate, endDate, description) {
    this.position = position;
    this.company = company;
    this.location = location;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }
}

class EducationItem {
  constructor(degree, college, location, graduationDate) {
    this.degree = degree;
    this.college = college;
    this.location = location;
    this.graduationDate = graduationDate;
  }
}

module.exports = {
  WorkExperienceItem,
  EducationItem,
};
