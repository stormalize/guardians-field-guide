import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";

function classes(list: object): string {
	return Object.entries(list)
		.map(([class_str, shouldInclude]) =>
			shouldInclude && class_str ? class_str : false,
		)
		.filter((v) => v)
		.join(" ");
}

const site = lume();

site.add("assets");
site.filter("classes", classes);
site.ignore("README.md");
site.use(metas());

export default site;
