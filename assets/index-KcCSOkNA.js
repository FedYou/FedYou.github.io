(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l={"profile.name":"@FedYou","profile.description":"Desarrollador web y creador de add-ons para Minecraft Bedrock Edition","title.projects":"Proyectos","title.project.bedcli":"BedCli"},c={"profile.name":"@FedYou","profile.description":"Web developer and add-ons creator for Minecraft Bedrock Edition","title.projects":"Projects","title.project.bedcli":"BedCli"},d={es:l,en:c},a=(window.navigator.language||navigator.browserLanguage).split("-")[0],u=document.querySelectorAll("[key-lang]");u.forEach(o=>{const r=o.getAttribute("key-lang");o.textContent=d[a][r]??c[r]});
