import Countdown from "../Countdown/Countdown";

const dummyMilestones:IMilestone[] = [
  { name: 'accident',
    date: 1707936000000,
  },
  { name: 'ankle surgery',
    date: 1709244000000,
  },
  { name: '6 weeks post-op',
    date: 1712818800000,
  },
  { name: '12 weeks post-op',
    date: 1716447600000,
  },
  { name: 'Dr. Morshed follow-up appointment 6-weeks post-op',
    date: 1713301200000,
  },
  { name: 'Dr. Morshed follow-up appointment 12-weeks post-op',
    date: 1716330600000,
  },
  { name: 'last PT appointment',
    date: 1714595400000,
  },
  { name: 'next PT appointment',
    date: 1715356800000,
  },
  { name: 'last Tylenol',
    date: 1713754800000,
  },
  { name: 'first shower since accident',
    date: 1708538400000,
  },
  { name: 'last oxy',
    date: 1709992800000,
  }
];

const MilestonesPage = () => {
  return (
    <>
      <ul>
        { dummyMilestones.map((milestone, idx)=> 
          { return (<Countdown
                      milestone={ milestone }
                      key={idx}
                    />
          )}
        )}
      </ul>
    </>
  )
}

export default MilestonesPage;