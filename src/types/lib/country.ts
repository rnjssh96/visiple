import * as _countries from '../../data/countries.json';

export type CountryCode = string;

export type Country = {
	name: string;
	topLevelDomain: string[];
	alpha2Code: string;
	alpha3Code: CountryCode;
	callingCodes: string[];
	capital: string;
	altSpellings: string[];
	region: string;
	subregion: string;
	population: number;
	latlng: number[];
	demonym: string;
	area: number | null;
	gini: number | null;
	timezones: string[];
	borders: string[];
	nativeName: string;
	numericCode: string | null;
	currencies: {
		code: string | null;
		name: string | null;
		symbol: string | null;
	}[];
	languages: {
		iso639_1: string | null;
		iso639_2: string;
		name: string;
		nativeName: string;
	}[];
	translations: { ko: string; [key: string]: string | null };
	flag: string;
	regionalBlocs: {
		acronym: string;
		name: string;
		otherAcronyms: string[];
		otherNames: string[];
	}[];
	cioc: string | null;
};

const COUNTRIES: Country[] = _countries.countries;

export const allCountries = COUNTRIES;

export const countryCodesBySearchword = (word: string): Country[] => {
	let result: Country[] = [];
	const regexp = new RegExp(`^.*${word}.*$`, 'gi');
	COUNTRIES.forEach((cntry: Country) => {
		if (
			cntry.translations.ko.search(regexp) !== -1 ||
			cntry.name.search(regexp) !== -1
		) {
			result.push(cntry);
		}
	});
	return result;
};

export const countryByCode = (code: CountryCode): Country | null => {
	let result: Country | null = null;
	COUNTRIES.some((cntry: Country) => {
		if (cntry.alpha3Code === code) {
			result = cntry;
		}
		return cntry.alpha3Code === code;
	});
	return result;
};

export const countriesByCodes = (codes: CountryCode[]): Country[] => {
	let result: Country[] = [];
	COUNTRIES.forEach((cntry: Country) => {
		if (codes.includes(cntry.alpha3Code)) {
			result.push(cntry);
		}
	});
	return result;
};
