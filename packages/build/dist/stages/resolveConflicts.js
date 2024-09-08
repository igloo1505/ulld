export const resolveConflicts = async (build, options) => {
    await build.resolveSlotConflicts(); // beta
    await build.resolvePageConflicts(); // beta
};
