import "@testing-library/jest-dom";

// jest.setup.ts
class MockIntersectionObserver {
	constructor() {}

	observe() {
		return null;
	}

	unobserve() {
		return null;
	}

	disconnect() {
		return null;
	}
}

// Assign the mock to the global object
global.IntersectionObserver = MockIntersectionObserver as any;
