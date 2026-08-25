import os, base64, json, urllib.request, urllib.error, sys

TOK = os.environ["GH_TOKEN"]
OWNER = "denghaotiandenghaotian-design"
REPO = "gaoyineimeng"
BASE = r"C:\Users\dht\WorkBuddy\高一 内蒙\study-system"

def api(method, url, data=None):
    req = urllib.request.Request(url, data=data, method=method)
    req.add_header("Authorization", "Bearer " + TOK)
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, timeout=90) as x:
            return x.read().decode(), x.status
    except urllib.error.HTTPError as e:
        return e.read().decode(), e.code

# collect files (repo path -> local path)
files = []
for root, _, names in os.walk(BASE):
    for n in names:
        full = os.path.join(root, n)
        rel = os.path.relpath(full, BASE).replace("\\", "/")
        if rel == ".nojekyll":
            continue
        files.append((rel, full))

# add .nojekyll as empty file
files.append((".nojekyll", None))

ok, fail = 0, 0
for rel, full in files:
    if full is None:
        content = ""
    else:
        with open(full, "rb") as f:
            content = base64.b64encode(f.read()).decode()
    body = json.dumps({
        "message": "deploy " + rel,
        "content": content,
        "branch": "main"
    }).encode()
    resp, status = api("PUT",
        "https://api.github.com/repos/%s/%s/contents/%s" % (OWNER, REPO, rel),
        body)
    if status in (200, 201):
        print("OK  [%d] %s" % (status, rel))
        ok += 1
    else:
        print("FAIL[%d] %s -> %s" % (status, rel, resp[:300]))
        fail += 1

print("UPLOAD DONE ok=%d fail=%d" % (ok, fail))
