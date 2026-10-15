import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";

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
site.use(
	robots({
		disallowAI: true,
	}),
);
site.use(sitemap());

export default site;
