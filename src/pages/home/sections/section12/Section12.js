import React from "react";
import { useState, useEffect } from "react";
import "./Section12.css";
import winningTeamData from "../../../../assets/data/winningTeamData";
import WinningTeamCard from "../../../../components/winningTeamCard/WinningTeamCard";
import cauldron from '../../../../assets/images/cauldron.png'
const Section11 = () => {
  const useFade = (initial) => {
    const [show, setShow] = useState(initial);
    const [isVisible, setVisible] = useState(show);
    useEffect(() => {
      if (show) setVisible(true);
    }, [show]);
    const onAnimationEnd = () => {
      if (!show) setVisible(false);
    };

    const style = {
      animation: `${
        show ? "fadeIn 1.5s ease-in-out" : "fadeOut 0.5s ease-in-out"
      }`,
    };
    const fadeProps = {
      style,
      onAnimationEnd,
    };
    return [isVisible, setShow, fadeProps];
  };
  const [isVisible, setVisible, fadeProps] = useFade(false);

  return (
    <div
      className="codeutsava__section11"
      id="problems"
    >
      <div className="codeutsava__section11-body">
        <div className="codeutsava__section11-title"><img src={cauldron}></img>Previous Year Winners</div>
        <div className="codeutsava__section11-problems">
          <div className="codeutsava__section11-problems-container1-winning">
            {winningTeamData.map((shortlistedTeam, index) => (
              <WinningTeamCard
                key={index}
                name={shortlistedTeam.name}
                leader={shortlistedTeam.leader}
                college={shortlistedTeam.college}
                member1={shortlistedTeam.member1}
                member2={shortlistedTeam.member2}
                member3={shortlistedTeam.member3}
                member4={shortlistedTeam.member4}
                member5={shortlistedTeam.member5}
                member6={shortlistedTeam.member6}
                position={shortlistedTeam.position}
              />
            ))}
          </div>
          {isVisible && (
            <div
              className="codeutsava__section11-problems-container2"
              {...fadeProps}
            >
              {winningTeamData.map((shortlistedTeam, index) => (
                <shortlistedTeams
                  key={index}
                  name={shortlistedTeam.name}
                  leader={shortlistedTeam.leader}
                  college={shortlistedTeam.college}
                  member1={shortlistedTeam.member1}
                  member2={shortlistedTeam.member2}
                  member3={shortlistedTeam.member3}
                  member4={shortlistedTeam.member4}
                  member5={shortlistedTeam.member5}
                  member6={shortlistedTeam.member6}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section11;
