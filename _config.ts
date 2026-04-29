import lume from "lume/mod.ts";

function classes(list: object): string {
	return Object.entries(list)
		.map(([class_str, shouldInclude]) =>
			shouldInclude && class_str ? class_str : false,
		)
		.filter((v) => v)
		.join(" ");
}

const site = lume();

site.add("/style.css");
site.filter("classes", classes);

export default site;
