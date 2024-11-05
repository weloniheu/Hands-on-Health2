import React, { useState, useEffect } from 'react';
import { FocusMuscles } from '../../types/types';

interface EditFocusGroupsProps {
    duration: number;
    setDuration: (value: number) => void;
}

const initialFocusMuscles: FocusMuscles[] = [
    { id: 1, name: 'Chest', selected: false },
    { id: 2, name: 'Back', selected: false },
    { id: 3, name: 'Legs', selected: false },
    { id: 4, name: 'Arms', selected: false },
    { id: 5, name: 'Abs', selected: false },
    { id: 6, name: 'Cardio', selected: false },
];

const EditFocusGroups: React.FC<EditFocusGroupsProps> = ({ duration, setDuration }) => {
    const [muscleGroups, setMuscleGroups] = useState<FocusMuscles[]>(initialFocusMuscles);

    useEffect(() => {
        if (duration === 30) {
            const selected = muscleGroups.filter(mg => mg.selected);
            if (selected.length > 3) {
                alert('Only 3 muscle groups can be selected for 30 minutes workout.');
                setMuscleGroups(muscleGroups.map(mg => ({
                    ...mg,
                    selected: selected.slice(0, 3).some(sm => sm.id === mg.id)
                })));
            }
        }
    }, [duration, muscleGroups]);

    const handleMuscleGroupChange = (id: number) => {
        setMuscleGroups(muscleGroups.map(group => {
            if (group.id === id) {
                if (duration === 30 && !group.selected && muscleGroups.filter(mg => mg.selected).length >= 3) {
                    alert('Only 3 muscle groups can be selected for 30 minutes workout.');
                    return group;
                }
                return { ...group, selected: !group.selected };
            }
            return group;
        }));
    };

    return (
        <div>
            {muscleGroups.map(group => (
                <button key={group.id} onClick={() => handleMuscleGroupChange(group.id)}
                    className={group.selected ? 'selected' : ''}>
                    {group.name}
                </button>
            ))}
        </div>
    );
};

export default EditFocusGroups;