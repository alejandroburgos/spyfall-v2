import React, { useState, useEffect } from "react";

const Settings = ({ gameState, socket }) => {
	const { settings, AVAILABLE_LOCATION_PACKS } = gameState;
	const {
		timeLimit: serverMinutes,
		locationPack: serverPackId,
		includeAllSpy: serverIncludeAllSpy,
	} = settings;

	return (
		<div>
			<TimeLimit
				onSetMinutes={(minutes) => socket.emit("setTimeLimit", minutes)}
				serverMinutes={serverMinutes}
			/>
			<br />
			<LocationPack
				onSetLocationPack={(packId) => socket.emit("setLocationPack", packId)}
				serverPackId={serverPackId}
				locationPackList={AVAILABLE_LOCATION_PACKS}
			/>
			<IncludeAllSpy
				onSetIncludeAllSpy={(includeAllSpy) =>
					socket.emit("setIncludeAllSpy", includeAllSpy)
				}
				serverIncludeAllSpy={serverIncludeAllSpy}
			/>
		</div>
	);
};

const TimeLimit = ({ onSetMinutes, serverMinutes }) => {
	const minLength = 0;
	const maxLength = 60;

	const [minutes, setMinutes] = useState(serverMinutes);
	const handleChange = (change) => () => {
		const newMinutes = minutes + change;
		if (newMinutes >= minLength && newMinutes <= maxLength) {
			setMinutes(newMinutes);
			onSetMinutes(newMinutes);
		}
	};

	useEffect(() => {
		setMinutes(serverMinutes);
	}, [serverMinutes]);

	return (
		<div>
			<label>Límite de tiempo:</label>
			<div style={{ margin: "-.5em 0 -1em" }}>
				<button
					className="btn-small"
					onClick={handleChange(-1)}
					disabled={minutes <= minLength}
				>
					-
				</button>
				<span>
					{minutes} minuto{minutes !== 1 ? "s" : ""}
				</span>

				<button
					className="btn-small"
					onClick={handleChange(1)}
					disabled={minutes >= maxLength}
				>
					+
				</button>
				<style jsx>{`
					button {
						margin: 1em, 0;
						font-size: 1.5em;
					}
				`}</style>
			</div>
		</div>
	);
};

const LocationPack = ({
	onSetLocationPack,
	locationPackList,
	serverPackId,
}) => {
	const [selectedPackId, setSelectedPackId] = useState(serverPackId);

	const handleChange = (newPackId) => {
		setSelectedPackId(newPackId);
		onSetLocationPack(newPackId);
	};

	useEffect(() => {
		setSelectedPackId(serverPackId);
	}, [serverPackId]);

	return (
		<div>
			<label htmlFor="location-pack">Pack de ubicaciones:</label>
			<select
				className="u-full-width"
				id="location-pack"
				value={selectedPackId}
				onChange={({ target: { value } }) => handleChange(value)}
				style={{ maxWidth: "10em" }}
			>
				{locationPackList.map(({ id, name }) => (
					<option key={id} value={id}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
};

const IncludeAllSpy = ({ onSetIncludeAllSpy, serverIncludeAllSpy }) => {
	const [includeAllSpy, setIncludeAllSpy] = useState(serverIncludeAllSpy);

	const handleChange = (checked) => {
		setIncludeAllSpy(checked);
		onSetIncludeAllSpy(checked);
	};

	useEffect(() => {
		setIncludeAllSpy(serverIncludeAllSpy);
	}, [serverIncludeAllSpy]);

	return (
		<label>
			<input
				type="checkbox"
				onChange={({ target: { checked } }) => handleChange(checked)}
				checked={includeAllSpy}
			/>
			<span className="label-body">
			Probabilidad de que el 2% sean todos espías 	
			</span>
		</label>
	);
};

export default Settings;
