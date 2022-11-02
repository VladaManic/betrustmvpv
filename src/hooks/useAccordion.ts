import { useEffect, useState } from 'react';

const useAccordion = (status: boolean, index: number) => {
	const [opened, setOpened] = useState(status);

	useEffect(() => {
		if (index < 5) {
			setOpened(true);
		}
		return () => {
			setOpened(false);
		};
	}, [index]);

	return {opened, setOpened};
};

export default useAccordion