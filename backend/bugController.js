import Bug from "../models/Bug.js";

// Create Bug
export const createBug = async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Bugs
export const getBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
};

// Update Bug
export const updateBug = async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBug);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Bug
export const deleteBug = async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: "Bug deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
