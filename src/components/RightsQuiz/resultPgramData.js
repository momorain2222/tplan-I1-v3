const programs = [
  {
    _id: 1,
    name: "TILA",
    require: [[1, 1]],
    url: "https://...",
    isChecked: false
  },
  {
    _id: 2,
    name: "Education",
    require: [[1, 1]],
    url: "https://...",
    isChecked: false
  },
  {
    _id: 3,
    name: "Legal Aid",
    require: [[1, 1], [5, 1]],
    url: "https://...",
    isChecked: false
  },
  {
    _id: 4,
    name: "Youth Allowance",
    require: [[2, 1], [3, 1]],
    url: "https://...",
    isChecked: false
  },
  {
    _id: 5,
    name: "Rental",
    require: [[2, 1], [3, 1], [7, 1]],
    url: "https://...",
    isChecked: false
  },
  {
    _id: 6,
    name: "New Start",
    require: [[4, 1], [9, 1]],
    url: "https://...",
    isChecked: false
  },
  {
    _id: 7,
    name: "Mobility",
    require: [[8, 1], [10, 1]],
    url: "https://...",
    isChecked: false
  },
  {
    _id: 8,
    name: "Ab Study",
    require: [[11, 1], [12, 1]],
    url: "https://...",
    isChecked: false
  }
];

export function getPrograms() {
  return programs;
}
