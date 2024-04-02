import type { Row } from "@libsql/client";

export interface storedData {
	dateRetrieved: Date;
	recipes: Row[];
}
