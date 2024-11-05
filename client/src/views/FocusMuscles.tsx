import React, { useState } from 'react';
import { FocusMuscles } from '../types/types';
import { useNavigate } from 'react-router-dom';
import './FocusMuscles.css';

interface FocusMusclesViewProps {
    duration: number;
}

const initialFocusMuscles: FocusMuscles[] = [
    { id: 1, name: 'Chest', selected: false },
    { id: 2, name: 'Legs', selected: false },
    { id: 3, name: 'Back', selected: false },
    { id: 4, name: 'Arms', selected: false },
    { id: 5, name: 'Cardio', selected: false },
    { id: 6, name: 'Abs', selected: false },
];

const FocusMusclesView: React.FC<FocusMusclesViewProps> = ({ duration }) => {  // Now accepts duration as a prop
    const [muscleGroups, setMuscleGroups] = useState<FocusMuscles[]>(initialFocusMuscles);
    const navigate = useNavigate();

    const toggleMuscleGroup = (id: number) => {
        const selectedCount = muscleGroups.filter(mg => mg.selected).length;
        const isCurrentlySelected = muscleGroups.find(mg => mg.id === id)?.selected;

        if (duration === 30 && !isCurrentlySelected && selectedCount >= 3) {
            alert('Only 3 muscle groups can be selected for a 30-minute workout.');
            return;
        }

        setMuscleGroups(muscleGroups.map(group => ({
            ...group,
            selected: group.id === id ? !group.selected : group.selected
        })));
    };

    return (
        <div className="focus-muscles-view">
            <div className="header-container">
                <h1>Choose Your Workout Plan</h1>
                <button className="cancel-button" onClick={() => navigate(-1)}>Cancel</button>
            </div>
            <h2>Focus</h2>
            <div className="muscle-group-container">
                {muscleGroups.map(group => (
                    <button
                        key={group.id}
                        onClick={() => toggleMuscleGroup(group.id)}
                        className={`muscle-group-button ${group.selected ? 'selected' : ''}`}
                    >
                        {group.name}
                    </button>
                ))}
            </div>
            <div className="navigation-buttons">
                <button className="prev-button" onClick={() => navigate(-1)}>Prev</button>
                <button className="next-button" onClick={() => navigate('/edit-workout')}>Next</button>
            </div>

        </div >
    );
};

export default FocusMusclesView;
