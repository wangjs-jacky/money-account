// 自动导入所有的图片
// https://webpack.js.org/guides/dependency-management/#requirecontext
// 安装 @types/webpack-env 解决 __WebpackModuleApi.RequireContext 报错
// let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
// try { importAll(require.context('icons', true, /\.svg$/)); } catch (error) { console.log(error); }
require("icons/money.svg");
require("icons/statistics.svg");
require("icons/tag.svg");

type Props = {
    tag: string
}

export const Icon = (props: Props) => {
    return (
        <svg>
            <use xlinkHref={"#" + props.tag}></use>
        </svg>
    )
}