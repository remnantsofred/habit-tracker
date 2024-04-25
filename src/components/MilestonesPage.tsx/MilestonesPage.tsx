import Countdown from "../Countdown/Countdown";

const dummyMilestones:IMilestone[] = [
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
  { name: 'next PT appointment',
    date: 1714167000000,
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