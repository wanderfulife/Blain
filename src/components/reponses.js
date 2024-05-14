const poste = [
	{
		id: 1,
		output: "A",
		text: "Poste A - Blain - Axe -> RN 171 - Au cédez le passage du giratoire",
	},
	{
		id: 2,
		output: "B",
		text: "Poste B - Blain - Axe -> RD 164 -  Au cédez le passage dugiratoire",
	},
	{
		id: 3,
		output: "C",
		text: "Poste C - La Grigonnais - Axe -> RN 171 -  Au cédez le passage dugiratoire",
	},
];

const types = [
	{ id: 1, output: 1, text: "VL" },
	{ id: 2, output: 2, text: "PL" },
];

const occupants = [
	{ id: 1, output: 1, text: "Conducteur seul" },
	{ id: 2, output: 2, text: "2" },
	{ id: 3, output: 3, text: "3" },
	{ id: 4, output: 4, text: "4" },
	{ id: 5, output: 5, text: "5" },
	{ id: 6, output: 6, text: "6" },
	{ id: 7, output: 7, text: "7" },
	{ id: 8, output: 8, text: "8" },
	{ id: 9, output: 9, text: "9" },
];

const motif = [
	{ id: 1, output: "1", text: "domicile" },
	{ id: 2, output: "2", text: "travail" },
	{ id: 3, output: "3", text: "affaires professionnelles" },
	{ id: 4, output: "4", text: "affaires personnelles" },
	{ id: 5, output: "5", text: "etudes" },
	{ id: 6, output: "6", text: "achats" },
	{ id: 7, output: "7", text: "loisirs" },
	{ id: 8, output: "8", text: "visites" },
	{ id: 9, output: "9", text: "accompagnement" },
	{ id: 10, output: "10", text: "autre" },
];

const q12 = [
	{ id: 1, output: "1", text: "Oui" },
	{
		id: 2,
		output: "2",
		text: "Non, je transporte la famille ou des conaissances",
	},
];

const q13 = [
	{ id: 1, output: "1", text: "Regulier" },
	{
		id: 2,
		output: "2",
		text: "Occasionnel",
	},
];

const q14 = [
	{ id: 1, output: "0", text: "Un actif" },
	{ id: 2, output: "1", text: "Un etudiant" },
	{ id: 3, output: "2", text: "En recherche d'emploi" },
	{ id: 4, output: "3", text: "Un retraité" },
];

const q16 = [
	{ id: 1, output: "1", text: "Produits Agricoles" },
	{ id: 2, output: "2", text: "Produits Alimentaires" },
	{ id: 3, output: "3", text: "Produits Energetiques" },
	{ id: 4, output: "4", text: "Minerais" },
	{ id: 5, output: "5", text: "Produits Metallurgiques" },
	{ id: 6, output: "6", text: "Materiaux de constructions" },
	{ id: 7, output: "7", text: "Produits Chimiques et engrais" },
	{ id: 8, output: "8", text: "Produits Manufacturés" },
	{ id: 9, output: "9", text: "Ordures et dechets" },
	{ id: 10, output: "10", text: "Autres marchandises" },
];

const q17 = [
	{ id: 1, output: "1", text: "Oui" },
	{ id: 2, output: "2", text: "Non" },
];

export { poste, types, motif, occupants, q12, q13, q14, q16, q17 };
