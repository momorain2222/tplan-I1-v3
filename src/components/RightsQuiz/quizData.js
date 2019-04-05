const questions = [
  {
    _id: 1,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you OOHC`,
    //fact: `The couch started in April of 2017, but a partnership agreement wasn't technically signed until May`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [1, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [1, 0]
      }
    ]
  },

  {
    _id: 2,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you married`,
    //fact: `The Wing was the project that allowed us to kick things into gear, once we solidifed a few more projects we went all in and commited to The Couch.`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [2, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [2, 0]
      }
    ]
  },
  {
    _id: 3,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Do you have children`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [3, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [3, 0]
      }
    ]
  },
  {
    _id: 4,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you PR / Citizen`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [4, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [4, 0]
      }
    ]
  },
  {
    _id: 5,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Do you have leagal issue`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [5, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [5, 0]
      }
    ]
  },
  {
    _id: 6,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you living with parents`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [6, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [6, 0]
      }
    ]
  },
  {
    _id: 7,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Is your income less than $51K `,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [7, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [7, 0]
      }
    ]
  },
  {
    _id: 8,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Have you got the NDIS scheme`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [8, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [8, 0]
      }
    ]
  },
  {
    _id: 9,
    ageGroup: [3, 4],
    questionContent: `Are you currently employed`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [9, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [9, 0]
      }
    ]
  },
  {
    _id: 10,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you disabled?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [10, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [10, 0]
      }
    ]
  },
  {
    _id: 11,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Do you belong to Aboriginal community?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [11, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [11, 0]
      }
    ]
  },
  {
    _id: 12,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you currently under any government app ?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [12, 1]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [12, 0]
      }
    ]
  },
  {
    _id: 13,
    ageGroup: [1, 2, 3, 4],
    questionContent: `Are you getting another payment to study or train?`,
    //fact: `The Couch is currently entirely referral based. Which is great because we don't have time to chase down leads we're busy making the internet ;)`,
    choices: [
      {
        id: Math.random(),
        item: "Yes",
        answer: [13, 0]
      },
      {
        id: Math.random(),
        item: "No",
        answer: [13, 1]
      }
    ]
  }
];

export function getQuestions(categoryId) {
  const filteredQuestion = questions.filter(question => {
    console.log(typeof categoryId);
    return question.ageGroup.includes(Number(categoryId));
  });

  console.log(filteredQuestion);
  console.log("filtered questions is ", filteredQuestion);
  return filteredQuestion;
}
