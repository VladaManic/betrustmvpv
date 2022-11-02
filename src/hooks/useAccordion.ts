import { useEffect, useState } from 'react';

interface ISingleReturn {
	opened: boolean;
	setOpened: any;
}

const useAccordion = (status: boolean, typeIndex: number, index: number) => {
	const [opened, setOpened] = useState(status);

	useEffect(() => {
		if (typeIndex === 0 && index < 6) {
			setOpened(true);
		}

		return () => {
			setOpened(false);
		};
	}, [typeIndex, index]);

	return { opened, setOpened };
};

export default useAccordion