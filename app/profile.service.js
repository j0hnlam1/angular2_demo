System.register(["./profile"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var profile_1;
    var ProfileService;
    return {
        setters:[
            function (profile_1_1) {
                profile_1 = profile_1_1;
            }],
        execute: function() {
            ProfileService = (function () {
                function ProfileService() {
                    this.profiles = [
                        new profile_1.Profile('Default Profile', ['San Francisco', 'Cupertino', 'Los Angeles'])
                    ];
                }
                ProfileService.prototype.saveNewProfile = function (cities) {
                    var profileName = 'Profile' + this.profiles.length;
                    var profile = new profile_1.Profile(profileName, cities);
                    this.profiles.push(profile);
                };
                ProfileService.prototype.getProfiles = function () {
                    return this.profiles;
                };
                ProfileService.prototype.deleteProfile = function (profile) {
                    this.profiles.splice(this.profiles.indexOf(profile), 1);
                };
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUNBO2dCQUFBO29CQUNTLGFBQVEsR0FBYzt3QkFDN0IsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztxQkFDN0UsQ0FBQztnQkFjSCxDQUFDO2dCQWJBLHVDQUFjLEdBQWQsVUFBZSxNQUFnQjtvQkFDOUIsSUFBTSxXQUFXLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNyRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxvQ0FBVyxHQUFYO29CQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFnQjtvQkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBQ0YscUJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELDJDQWlCQyxDQUFBIiwiZmlsZSI6InByb2ZpbGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZmlsZX0gZnJvbSBcIi4vcHJvZmlsZVwiO1xuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcblx0cHJpdmF0ZSBwcm9maWxlczogUHJvZmlsZVtdID0gW1xuXHRcdG5ldyBQcm9maWxlKCdEZWZhdWx0IFByb2ZpbGUnLCBbJ1NhbiBGcmFuY2lzY28nLCAnQ3VwZXJ0aW5vJywgJ0xvcyBBbmdlbGVzJ10pXG5cdF07XG5cdHNhdmVOZXdQcm9maWxlKGNpdGllczogc3RyaW5nW10pe1xuXHRcdGNvbnN0IHByb2ZpbGVOYW1lID0gJ1Byb2ZpbGUnICsgdGhpcy5wcm9maWxlcy5sZW5ndGg7XG5cdFx0Y29uc3QgcHJvZmlsZSA9IG5ldyBQcm9maWxlKHByb2ZpbGVOYW1lLCBjaXRpZXMpO1xuXHRcdHRoaXMucHJvZmlsZXMucHVzaChwcm9maWxlKTtcdFxuXHR9XG5cblx0Z2V0UHJvZmlsZXMoKXtcblx0XHRyZXR1cm4gdGhpcy5wcm9maWxlcztcblx0fVxuXG5cdGRlbGV0ZVByb2ZpbGUocHJvZmlsZTogUHJvZmlsZSl7XG5cdFx0dGhpcy5wcm9maWxlcy5zcGxpY2UodGhpcy5wcm9maWxlcy5pbmRleE9mKHByb2ZpbGUpLDEpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
