import { useEffect, useState } from 'react';
import Bannar from './components/Bannar/Bannar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import PledgeModal from './components/PledgeModal/PledgeModal';
import ThankYouModal from './components/ThankyouModal/ThankYouModal';

const App = () => {
	const targetBackers = 100000;
	const initialBackedData = { currentBackedAmt: 89914, backers: 5007 };
	const [currentBacked, setCurrentBacked] = useState(initialBackedData);
	const [progress, setProgress] = useState();
	const [modalOpen, setModalOpen] = useState(false);
	const [thankyouModal, setThankyouModal] = useState(false);
	const initialAmount = { noRewards: 0, bambooStand: 25, blackEdition: 75, mahhogany: 200 };
	const [pledgeAmt, setPledgeAmt] = useState(initialAmount);

	const [checkedPledge, setCheckedPledge] = useState('');

	useEffect(() => {
		calculateProgress(currentBacked.currentBackedAmt);
	}, [currentBacked]);

	const calculateProgress = (currentBackedAmt) => {
		const percent = (100 * currentBackedAmt) / targetBackers;

		if (percent < 0) {
			setProgress(0);
		} else {
			setProgress(percent);
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setPledgeAmt((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleRadioPledge = (e) => {
		setCheckedPledge(e.target.value);
	};
	const handleSubmit = (amount) => {
		setCurrentBacked((prevState) => ({
			...prevState,
			currentBackedAmt: parseInt(prevState.currentBackedAmt) + parseInt(amount),
			backers: prevState.backers + 1,
		}));
	};
	return (
		<>
			<Navbar />
			<Bannar />

			<Home
				progress={progress}
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				handleRadioPledge={handleRadioPledge}
				setCheckedPledge={setCheckedPledge}
				currentBacked={currentBacked}
			/>

			{modalOpen && (
				<PledgeModal
					modalOpen={modalOpen}
					setModalOpen={setModalOpen}
					handleRadioPledge={handleRadioPledge}
					handleChange={handleChange}
					pledgeAmt={pledgeAmt}
					checkedPledge={checkedPledge}
					setCheckedPledge={setCheckedPledge}
					thankyouModal={thankyouModal}
					setThankyouModal={setThankyouModal}
					handleSubmit={handleSubmit}
				/>
			)}
			{thankyouModal && <ThankYouModal thankyouModal={thankyouModal} setThankyouModal={setThankyouModal} />}
		</>
	);
};

export default App;
