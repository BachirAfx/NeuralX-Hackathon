import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar.jsx'
import AnalyseFurther from '../components/Buttons/AnalyseFurther.jsx';
import HealthScoreMeter from '../components/HealthScore/Meter.jsx';
import Box1 from '../components/Result Box/Box-1.jsx';
import Box2 from '../components/Result Box/Box-2.jsx';
import Box3 from '../components/Result Box/Box-3.jsx';
import Box4 from '../components/Result Box/Box-4.jsx';

function TempAnalytics() {
    const [score, setScore] = useState(null);

  useEffect(() => {
    // Simulate AI processing
    setTimeout(() => {
      setScore(78); // example AI score
    }, 3000);
  }, []);
    return (
        <div>
            <Box1/>
            <Box2/>
            <Box3/>
            <Box4/>
            <NavBar/>
            <AnalyseFurther/>

            <div className="container mt-5">
            {/* <h2>Overall Health Summary</h2> */}

      {score === null ? (
        <>
          <div className="spinner-border mt-3 text-center"></div>
          <p className="mt-3">Analyzing your report…</p>
        </>
      ) : (
        <>
          <HealthScoreMeter score={score} />

          {/* <p className="mt-4"> */}
            {/* Your report shows mostly normal values with a few */}
            {/* minor abnormalities. */}
          {/* </p> */}

          {/* <small className="text-muted"> */}
            {/* This score is AI-generated and not a medical diagnosis. */}
          {/* </small> */}
        </>
      )}
        </div>

        </div>
    );
}

export default TempAnalytics;