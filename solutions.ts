export const multiplyValue = (
	value: number,
	multiplier?: number,
): number => {
	return multiplier !== undefined ? value * multiplier : value * 2;
};

export const processInput = (
	value: string | number | boolean,
): string | number => {
	if (typeof value === "string") return value.trim().toLowerCase();
	if (typeof value === "number") return value * 10;
	return value ? "Active" : "Inactive";
};

export const formatCoordinate = (
	coordinate: readonly [number, number, string],
): string => {
	const [latitude, longitude, locationName] = coordinate;
	return `Location: ${locationName} (${latitude}, ${longitude})`;
};

export const concatenateArrays = <T>(...arrays: T[][]): T[] => {
	return arrays.flat();
};

export interface Course {
	title: string;
	students: number;
	isPublished: boolean;
}

export const getPopularCourses = (
	courses: Course[],
	minStudents: number,
): Course[] => {
	return courses.filter(
		(course) => course.isPublished && course.students >= minStudents,
	);
};

export const pluckValues = <T, K extends keyof T>(
	items: T[],
	key: K,
): T[K][] => {
	return items.map((item) => item[key]);
};

export class Employee {
	protected name: string;
	private baseSalary: number;

	constructor(name: string, baseSalary: number) {
		this.name = name;
		this.baseSalary = baseSalary;
	}

	getDetails(): string {
		return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
	}
}

export class Manager extends Employee {
	private department: string;

	constructor(name: string, baseSalary: number, department: string) {
		super(name, baseSalary);
		this.department = department;
	}

	getRoleInfo(): string {
		return `Manager of ${this.department}: ${this.name}`;
	}
}

export const validateAgeAsync = (age: number): Promise<string> => {
	return new Promise((resolve, reject) => {
		if (age >= 18) {
			setTimeout(() => resolve("Access Granted"), 1000);
		} else {
			reject(new Error("Access Denied: Must be 18 or older"));
		}
	});
};
