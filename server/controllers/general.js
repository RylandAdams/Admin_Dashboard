import User from '../models/User.js';

export const getUser = async (req, res) => {
	try {
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
